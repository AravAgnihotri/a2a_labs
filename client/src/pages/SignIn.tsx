import { useState } from "react";
import { SignInPage, Testimonial } from "@/components/ui/sign-in";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { toast } from "sonner";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing platform! The user experience is seamless and the features are exactly what I needed."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This service has transformed how I work. Clean design, powerful features, and excellent support."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Martinez",
    handle: "@davidcreates",
    text: "I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity."
  },
];

const SignIn = () => {
  const { loginWithGoogle } = useAuth();
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Welcome back to A2A Labs!");
      setLocation('/');
    } catch (error: any) {
      console.error('Google sign-in failed:', error);
      toast.error(error.message || 'Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-background text-foreground">
      <SignInPage
        title={<span className="font-light text-foreground tracking-tighter">Welcome back to A2A Labs</span>}
        description="Access your account and continue building agent systems"
        heroImageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80"
        onGoogleSignIn={handleGoogleSignIn}
      />
    </div>
  );
};

export default SignIn;

