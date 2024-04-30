import { Input } from "@/app/lib/definitions"
import { useFormContext } from "react-hook-form"
import { differentPatterns } from "./differentPatterns";

// style
import style from '@/app/ui/style/signin/form.module.css'; 

const Inputfield = ({src, alt, type, placeholder, property, required, error}: Input) => {
  const { register } = useFormContext(); 
  const firstLetterUpper = property.charAt(0).toLocaleUpperCase() + property.slice(1);
  const { pattern, errorMessage } = differentPatterns(property);
  const label = property === 'email' ? 'E-post' : 'Lösenord' 

  return (
    <div>
      <label className="mt-8 flex border-b-2 border-black">
        <img
          className="w-6 h-6 mt-2 mr-2"
          src={src}
          alt={alt} />
        <input
          type={type}
          placeholder={placeholder}
          className="h-10 w-full px-2 outline-none border-none"
          {...register(property, {
            required: required,
            pattern: pattern
          })}
        />
      </label>
      {error[property] && error[property]!.type === "required" &&
      (<p className={style.errorMsg}>{label} är obligatorisk.</p>)}
      {error[property] && error[property]!.type === 'pattern' &&
      (<p className={style.errorMsg}>{errorMessage}</p>)}
    </div>
  )
}

export default Inputfield
