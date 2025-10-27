type ContextMenuProps = {
    onClose: () => void;
    position: { x: number; y: number };
};

type ContextMenuOptionProps = {
    onClose: () => void;
};

export type { ContextMenuProps, ContextMenuOptionProps };