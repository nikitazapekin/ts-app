import { ReactNode } from "react"
interface TemplateNameProps {
children: ReactNode, 
}
export const TemplateName =({children}: TemplateNameProps) => (
    <div className="templateName">
{children}
    </div>
)