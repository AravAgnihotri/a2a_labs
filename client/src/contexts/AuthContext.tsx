/**
 * Authentication Context
 * 
 * Manages user authentication state across the application
 */

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '@/lib/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string, displayName?: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, displayName?: string) {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, { displayName });
    }
  }

  async function login(email: string, password: string) {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    await signOut(auth);
  }

  async function loginWithGoogle() {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  async function resetPassword(email: string) {
    if (!isFirebaseConfigured) {
      throw new Error('Firebase is not configured. Please set up your Firebase credentials.');
    }
    await sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    // Skip Firebase initialization if not configured
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    loginWithGoogle,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

