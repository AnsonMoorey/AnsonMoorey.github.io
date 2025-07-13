import { useState } from 'react';
export function Tabs({ defaultValue, children }) { return <div>{children}</div>; }
export function TabsList({ children, className }) { return <div className={className}>{children}</div>; }
export function TabsTrigger({ value, children }) { return <button>{children}</button>; }
export function TabsContent({ value, children }) { return <div>{children}</div>; }