import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

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

const roles = ["Founder", "Developer", "Operator", "Researcher", "Student", "Other"];
const teamSizes = ["Just me", "2–5", "6–20", "21–100", "100+"];
const intents = ["Personal agents", "Internal tools", "Research workflows", "Automation", "Agent coordination", "Experimentation"];
const urgencies = ["Just exploring", "This month", "This week", "Immediately"];
const comfortLevels = ["Non-technical", "Some technical", "Developer", "Advanced systems"];
const discoverySources = ["Twitter / X", "LinkedIn", "Referral", "Community", "Article", "Event", "Other"];
const priorities = ["Reliability", "Speed", "Control", "Transparency", "Flexibility"];

export default function Onboarding() {
  const { currentUser } = useAuth();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  
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
      return;
    }
    
    // Check if already onboarded
    const checkOnboarded = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().onboardingComplete) {
        setLocation("/");
      }
    };
    checkOnboarded();
  }, [currentUser, setLocation]);

  const checkUsername = async (username: string) => {
    if (username.length < 3) return;
    setIsCheckingUsername(true);
    const q = query(collection(db, "users"), where("username", "==", username.toLowerCase()));
    const querySnapshot = await getDocs(q);
    setUsernameAvailable(querySnapshot.empty);
    setIsCheckingUsername(false);
  };

  const nextStep = () => setStep(s => Math.min(s + 1, steps.length));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleFinish = async () => {
    if (!currentUser) return;
    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        ...formData,
        onboardingComplete: true,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      toast.success("Welcome to A2A Labs!");
      setLocation("/");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile. Please try again.");
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.fullName && formData.username && usernameAvailable;
      case 2: return !!formData.role;
      case 3: return !!formData.teamSize;
      case 4: return formData.intent.length > 0;
      case 5: return !!formData.urgency;
      case 6: return !!formData.technicalComfort;
      case 7: return !!formData.discovery;
      case 8: return !!formData.priority;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 font-inter">
      <div className="w-full max-w-md space-y-12">
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
            <span>Step {step} of {steps.length}</span>
            <span>{steps[step - 1]}</span>
          </div>
          <Progress value={(step / steps.length) * 100} className="h-[2px] bg-zinc-900" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">Your identity</h1>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-xs text-zinc-400 uppercase tracking-wider">Full name</Label>
                    <Input 
                      id="fullName" 
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-zinc-950 border-zinc-800 focus:border-zinc-500 h-12 rounded-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-xs text-zinc-400 uppercase tracking-wider">Username</Label>
                    <Input 
                      id="username" 
                      value={formData.username}
                      onChange={e => {
                        const val = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
                        setFormData({ ...formData, username: val });
                        checkUsername(val);
                      }}
                      className="bg-zinc-950 border-zinc-800 focus:border-zinc-500 h-12 rounded-none" 
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-zinc-600 italic">Cannot be changed later</p>
                      {isCheckingUsername && <span className="text-[10px] text-zinc-500">Checking...</span>}
                      {usernameAvailable === true && <span className="text-[10px] text-green-500">Available</span>}
                      {usernameAvailable === false && <span className="text-[10px] text-red-500">Taken</span>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">Which best describes you?</h1>
                <div className="grid grid-cols-1 gap-2">
                  {roles.map(r => (
                    <Button 
                      key={r}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.role === r ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, role: r }); nextStep(); }}
                    >
                      {r}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">Team size</h1>
                <div className="grid grid-cols-1 gap-2">
                  {teamSizes.map(t => (
                    <Button 
                      key={t}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.teamSize === t ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, teamSize: t }); nextStep(); }}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">What are you here to build?</h1>
                <div className="grid grid-cols-1 gap-2">
                  {intents.map(i => (
                    <Button 
                      key={i}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.intent.includes(i) ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => {
                        const newIntent = formData.intent.includes(i) 
                          ? formData.intent.filter(x => x !== i)
                          : [...formData.intent, i].slice(0, 3);
                        setFormData({ ...formData, intent: newIntent });
                      }}
                    >
                      {i}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">How soon do you want this working?</h1>
                <div className="grid grid-cols-1 gap-2">
                  {urgencies.map(u => (
                    <Button 
                      key={u}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.urgency === u ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, urgency: u }); nextStep(); }}
                    >
                      {u}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">Technical comfort</h1>
                <div className="grid grid-cols-1 gap-2">
                  {comfortLevels.map(c => (
                    <Button 
                      key={c}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.technicalComfort === c ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, technicalComfort: c }); nextStep(); }}
                    >
                      {c}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">How did you hear about us?</h1>
                <div className="grid grid-cols-1 gap-2">
                  {discoverySources.map(s => (
                    <Button 
                      key={s}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.discovery === s ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, discovery: s }); nextStep(); }}
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 8 && (
              <div className="space-y-6">
                <h1 className="text-3xl font-light tracking-tight">What matters most to you?</h1>
                <div className="grid grid-cols-1 gap-2">
                  {priorities.map(p => (
                    <Button 
                      key={p}
                      variant="outline"
                      className={`h-14 justify-start px-6 rounded-none border-zinc-800 hover:bg-zinc-900 transition-all ${formData.priority === p ? 'bg-zinc-900 border-zinc-500' : ''}`}
                      onClick={() => { setFormData({ ...formData, priority: p }); nextStep(); }}
                    >
                      {p}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === 9 && (
              <div className="space-y-8">
                <h1 className="text-3xl font-light tracking-tight">Review</h1>
                <div className="space-y-4 border-l border-zinc-800 pl-6 py-2">
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Identity</p>
                    <p className="text-sm">{formData.fullName} (@{formData.username})</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Role & Team</p>
                    <p className="text-sm">{formData.role} • {formData.teamSize}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Intent</p>
                    <p className="text-sm">{formData.intent.join(", ")}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Priority</p>
                    <p className="text-sm">{formData.priority}</p>
                  </div>
                </div>
                <Button 
                  className="w-full h-14 bg-white text-black hover:bg-zinc-200 rounded-none font-medium"
                  onClick={handleFinish}
                >
                  Finish setup
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center pt-8 border-t border-zinc-900">
          {step > 1 ? (
            <Button variant="ghost" size="sm" onClick={prevStep} className="text-zinc-500 hover:text-white px-0 rounded-none">
              Back
            </Button>
          ) : <div />}
          
          {(step === 1 || step === 4) && (
            <Button 
              size="sm" 
              onClick={nextStep} 
              disabled={!isStepValid()}
              className="bg-white text-black hover:bg-zinc-200 rounded-none px-8 h-10"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
