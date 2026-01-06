import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  "Identity",
  "Role",
  "Team Size",
  "Intent",
  "Urgency",
  "Technical Comfort",
  "Discovery",
  "Priorities",
  "Review"
];

export default function Onboarding() {
  const { currentUser } = useAuth();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    role: "",
    teamSize: "",
    intent: [] as string[],
    urgency: "",
    technicalComfort: "",
    discovery: "",
    priority: ""
  });

  useEffect(() => {
    if (!currentUser) {
      setLocation("/signin");
    }
  }, [currentUser, setLocation]);

  const nextStep = () => setStep(s => Math.min(s + 1, steps.length));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinish = async () => {
    toast.success("Onboarding complete!");
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-500 uppercase tracking-widest">
            <span>Step {step} of {steps.length}</span>
            <span>{steps[step - 1]}</span>
          </div>
          <Progress value={(step / steps.length) * 100} className="h-1 bg-zinc-800" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {step === 1 && (
              <div className="space-y-4">
                <h1 className="text-2xl font-light tracking-tight">Your identity</h1>
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-zinc-400">Full name</Label>
                  <Input 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-zinc-900 border-zinc-800 focus:border-zinc-500" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-zinc-400">Username</Label>
                  <Input 
                    id="username" 
                    value={formData.username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                    className="bg-zinc-900 border-zinc-800 focus:border-zinc-500" 
                  />
                  <p className="text-xs text-zinc-600">Cannot be changed later</p>
                </div>
              </div>
            )}

            {step > 1 && step < 9 && (
              <div className="space-y-4">
                <h1 className="text-2xl font-light tracking-tight">{steps[step - 1]}</h1>
                <p className="text-zinc-500">Selection step placeholder for {steps[step - 1]}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-800 hover:bg-zinc-900"
                  onClick={nextStep}
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 9 && (
              <div className="space-y-4">
                <h1 className="text-2xl font-light tracking-tight">Review</h1>
                <div className="bg-zinc-900 p-4 rounded-lg space-y-2 text-sm text-zinc-400">
                  <p>Name: {formData.fullName}</p>
                  <p>Username: {formData.username}</p>
                </div>
                <Button 
                  className="w-full bg-white text-black hover:bg-zinc-200"
                  onClick={handleFinish}
                >
                  Finish setup
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-8">
          {step > 1 && (
            <Button variant="ghost" size="sm" onClick={prevStep} className="text-zinc-500 hover:text-white">
              Back
            </Button>
          )}
          {step < 9 && step === 1 && (
            <Button 
              size="sm" 
              onClick={nextStep} 
              disabled={!formData.fullName || !formData.username}
              className="ml-auto bg-white text-black hover:bg-zinc-200"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
