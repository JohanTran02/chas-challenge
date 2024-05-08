import { Input } from "@/app/lib/definitions"
import { useFormContext } from "react-hook-form"
import { differentPatterns } from "../../lib/differentPatterns";

// style
import style from '@/app/ui/style/signin/form.module.css'; 

const Inputfield = ({type, property, required, error}: Input) => {
  const { register } = useFormContext(); 
  const { pattern, errorMessage } = differentPatterns(property);
  const label = property === 'email' ? 'Mejladress' : 'Lösenord' 

  return (
    <div>
      <label className="">
        <p className="mb-1">{label}</p>
        <input 
          type={type} 
          className="h-16 w-full border-[1px] border-black px-2 rounded-lg" 
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