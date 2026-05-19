import * as React from "react"

const Input = React.forwardRef(
  ({ className, type, error, name, ...rest }, ref) => {
    return (
      <>
      <input
        type={type}
        name={name}
        className={
          `input
          ${className}
          `
        }
        ref={ref}
        {...rest}
      />
      {error && (
        <div
          id={`${name}-error`}
          className="input-error"
          role="alert"
        >
          <span className="text-sm">{error}</span>
        </div>
      )}
    </>
    );
  }
)
Input.displayName = "Input"

export default Input;
