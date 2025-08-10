import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"

export interface CustomBasicButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    ancleLink?: string
    loading?: boolean
    className?: string
    style?: CSSProperties
    icon?: ReactNode
    rightIcon?: ReactNode
    form?: string
    children?: ReactNode
    htmlType?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    shape?: 'default' | 'circle'
    type?: 'default' | 'primary' | 'dashed' | 'danger' | 'link'
    disabled?: boolean
}