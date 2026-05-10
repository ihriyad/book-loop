"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Label, Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <h2 className="uppercase font-bold">{theme} Mode</h2>
      <Switch onChange={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch>
    </div>
  );
};

export default ThemeToggle;
