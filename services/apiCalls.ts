import axios from "axios";

export async function registerService(email: string, password: string) {
    let response = await axios.post<ResponseWithData<SignUpData>>('http://localhost:3000/api/register', {
        // username
        email,
        password,
    })
    return response.data;
}
export async function loginService(email: string, password: string) {
  let response = await axios.post<ResponseWithData<SignInData>>('http://localhost:3000/api/users/login', {
      email,
      password
  })
  return response.data;
}

type ResponseWithData<T> = {
  data: T;
  success: boolean;
  errors: Array<Number>;
};
type SignInData = {
  accessToken: string;
  // refreshToken: string;
  "user":{
		email:string;
		password: string
	}
};
type SignUpData = {
  // email: string;
  // password: string; //database
  // username: string; //postman
  "user":{
		username: string;
		email:string;
		password: string
	}
};
