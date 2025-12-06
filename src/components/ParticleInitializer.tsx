import React from 'react';
// ⚠️ Using a simpler, combined import strategy for better environment compatibility
// The error indicates the compiler could not find these paths.
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// 1. Create a Context to share the initialization state
interface ParticleContextType {
    isParticlesInitialized: boolean;
}
export const ParticleContext = React.createContext<ParticleContextType>({
    isParticlesInitialized: false,
});

// 2. The component that runs the initialization logic once
export const ParticleInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isParticlesInitialized, setIsParticlesInitialized] = React.useState(false);

    React.useEffect(() => {
        if (isParticlesInitialized) return;
        
        // This runs only once on mount
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setIsParticlesInitialized(true);
            console.log("Particles engine initialized.");
        }).catch(err => {
            console.error("Failed to initialize particles engine:", err);
        });
    }, [isParticlesInitialized]);

    return (
        <ParticleContext.Provider value={{ isParticlesInitialized }}>
            {children}
        </ParticleContext.Provider>
    );
};

// 3. Hook to use the state
export const useParticlesInitialized = () => React.useContext(ParticleContext);
