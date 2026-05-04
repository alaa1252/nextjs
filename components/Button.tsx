// CH-15: Reusable Button System
type Variant = "primary" | "secondary" | "outline" | "danger"
type Size    = "sm" | "md" | "lg"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }

const styles: Record<Variant, React.CSSProperties> = {
  primary:   { background:"#3b82f6", color:"white",       border:"2px solid #3b82f6" },
  secondary: { background:"#64748b", color:"white",       border:"2px solid #64748b" },
  outline:   { background:"transparent", color:"#38bdf8", border:"2px solid #38bdf8" },
  danger:    { background:"#ef4444", color:"white",       border:"2px solid #ef4444" },
}
const sizes: Record<Size, React.CSSProperties> = {
  sm: { padding:"4px 12px",  fontSize:"13px" },
  md: { padding:"8px 20px",  fontSize:"15px" },
  lg: { padding:"12px 28px", fontSize:"17px" },
}

export default function Button({ variant="primary", size="md", disabled, style, ...props }: Props) {
  return (
    <button
      {...props}
      disabled={disabled}
      style={{ ...styles[variant], ...sizes[size], borderRadius:"6px", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontWeight:"500", transition:"opacity 0.15s", ...style }}
    />
  )
}
