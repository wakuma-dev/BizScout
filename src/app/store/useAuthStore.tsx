import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: Record<string, string>) => Promise<boolean>;
  signup: (userData: Record<string, string>) => Promise<boolean>;
  logout: () => void;
  initializeAuth: () => void;
}

// LocalStorage database configuration keys
const USERS_DB_KEY = 'frontend_mock_users_db';
const CURRENT_SESSION_KEY = 'frontend_current_user_session';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Synchronizes browser state on page reload safely across SSR frameworks
  initializeAuth: () => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedSession = localStorage.getItem(CURRENT_SESSION_KEY);
      if (savedSession) {
        set({ 
          user: JSON.parse(savedSession), 
          isAuthenticated: true 
        });
      }
    } catch (err) {
      console.error("Failed to parse localized auth session:", err);
    }
  },

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    
    // Simulate API Network latency latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (typeof window === 'undefined') {
      set({ isLoading: false });
      return false;
    }

    try {
      const localDb = localStorage.getItem(USERS_DB_KEY);
      const usersList: any[] = localDb ? JSON.parse(localDb) : [];

      // Validate matching parameters
      const foundUser = usersList.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );

      if (foundUser) {
        const sessionUser: User = { 
          id: foundUser.id, 
          email: foundUser.email, 
          name: foundUser.name 
        };
        
        localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(sessionUser));
        set({ user: sessionUser, isAuthenticated: true, isLoading: false });
        return true;
      } else {
        set({ error: 'Invalid email address or password sequence.', isLoading: false });
        return false;
      }
    } catch (err) {
      set({ error: 'Internal execution malfunction during authorization query.', isLoading: false });
      return false;
    }
  },

  signup: async (userData) => {
    set({ isLoading: true, error: null });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (typeof window === 'undefined') {
      set({ isLoading: false });
      return false;
    }

    try {
      const localDb = localStorage.getItem(USERS_DB_KEY);
      const usersList: any[] = localDb ? JSON.parse(localDb) : [];

      // Email collision validation
      const userExists = usersList.some((u) => u.email === userData.email);
      if (userExists) {
        set({ error: 'An account profile utilizing this email parameter already exists.', isLoading: false });
        return false;
      }

      // Format payload wrapper
      const newUser = {
        id: crypto.randomUUID(),
        name: userData.name || 'User',
        email: userData.email,
        password: userData.password, 
      };

      usersList.push(newUser);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(usersList));

      // Auto login post registration session initialization
      const sessionUser: User = { id: newUser.id, email: newUser.email, name: newUser.name };
      localStorage.setItem(CURRENT_SESSION_KEY, JSON.stringify(sessionUser));

      set({ user: sessionUser, isAuthenticated: true, isLoading: false });
      return true;
    } catch (err) {
      set({ error: 'Failed to construct system profile identity context.', isLoading: false });
      return false;
    }
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CURRENT_SESSION_KEY);
    }
    set({ user: null, isAuthenticated: false, error: null });
  },
}));