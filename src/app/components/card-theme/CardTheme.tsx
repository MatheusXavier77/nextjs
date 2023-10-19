import "./CardThemeStyles.css";

interface CardThemeProps {
  className?: string
  title: string
  subtitle?: string
  children: any
}

export const CardTheme = ({...props}: CardThemeProps) =>{
  return (
    <div className={`card ${props.className}`}>
      <h1>{props.title}</h1>
      {props.subtitle && (
        <p className="text">{props.subtitle}</p>
      )}
      {props.children}
    </div>
  )
}
