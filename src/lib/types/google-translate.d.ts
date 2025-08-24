declare global {
    interface Window {
      googleTranslateElementInit?: () => void;
      google?: {
        translate?: {
          TranslateElement: new (
            options: { pageLanguage: string; includedLanguages?: string; autoDisplay?: boolean },
            elementId: string
          ) => any;
        };
      };
      __gt_script_loaded?: boolean;
    }
  }
  export {};
  