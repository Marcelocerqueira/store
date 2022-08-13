import React, { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext<any>({} as any);

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [countCart, setCountCart] = useState<any>([]);

  return (
    <AuthContext.Provider value={{ setCountCart, countCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): any {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
