import { useForm } from "react-hook-form";

type FormData = {
  name: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert (`Navn: ${data.name}`);
  };  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Navn:
            <input {...register("name")} />
        </label>
        <button type="submit">Submit</button>
    </form>
  )  

}
      