import type { Application, TextFile } from "src/types";

type TextFileProps = {
    app: Application;
};

type FooterProps = {
    hasUnsavedChanges: boolean;
    textFile: TextFile;
    app: Application;
    content: string;
};

type InfoProps = {
    textFile: TextFile;
};

type SaveModalProps = {
    app: Application;
    content: string;
    setShowSaveModal: (show: boolean) => void;
};

type SaveButtonProps = {
    app: Application;
    content: string;
    hasUnsavedChanges: boolean;
};

export type { TextFileProps, FooterProps, InfoProps, SaveModalProps, SaveButtonProps };