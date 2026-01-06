/**
 * Authentication Dialog Component
 * 
 * Provides sign in and sign up functionality in a modal dialog
 */

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const { signup, login, loginWithGoogle, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (showReset) {
        await resetPassword(email);
        setResetSent(true);
        setError('');
      } else if (isSignUp) {
        await signup(email, password, displayName);
        onOpenChange(false);
        resetForm();
      } else {
        await login(email, password);
        onOpenChange(false);
        resetForm();
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      await loginWithGoogle();
      onOpenChange(false);
      resetForm();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setError('');
    setResetSent(false);
    setShowReset(false);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
    setShowReset(false);
    setResetSent(false);
  };

  const toggleReset = () => {
    setShowReset(!showReset);
    setError('');
    setResetSent(false);
  };

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open);
      if (!open) resetForm();
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-syne text-2xl">
            {showReset ? 'Reset Password' : isSignUp ? 'Create Account' : 'Sign In'}
          </DialogTitle>
          <DialogDescription className="font-inter">
            {showReset 
              ? 'Enter your email to receive a password reset link'
              : isSignUp 
                ? 'Join A2A Labs to access exclusive content' 
                : 'Welcome back to A2A Labs'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="font-inter text-sm">{error}</AlertDescription>
            </Alert>
          )}

          {resetSent && (
            <Alert>
              <AlertDescription className="font-inter text-sm">
                Password reset email sent! Check your inbox.
              </AlertDescription>
            </Alert>
          )}

          {isSignUp && !showReset && (
            <div className="space-y-2">
              <Label htmlFor="displayName" className="font-inter">Name</Label>
              <Input
                id="displayName"
                type="text"
                placeholder="Your name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                className="font-inter"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="font-inter">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-inter"
            />
          </div>

          {!showReset && (
            <div className="space-y-2">
              <Label htmlFor="password" className="font-inter">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="font-inter"
              />
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full font-inter" 
            disabled={loading}
          >
            {loading ? 'Loading...' : showReset ? 'Send Reset Link' : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>

          {!showReset && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground font-inter">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full font-inter"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
            </>
          )}

          <div className="text-center text-sm font-inter">
            {showReset ? (
              <button
                type="button"
                onClick={toggleReset}
                className="text-foreground/70 hover:text-foreground underline"
              >
                Back to sign in
              </button>
            ) : (
              <>
                {!isSignUp && (
                  <button
                    type="button"
                    onClick={toggleReset}
                    className="text-foreground/70 hover:text-foreground underline block mx-auto mb-2"
                  >
                    Forgot password?
                  </button>
                )}
                <span className="text-foreground/70">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                </span>
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-foreground hover:underline"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}


