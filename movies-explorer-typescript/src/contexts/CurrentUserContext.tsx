import { createContext } from "react";
import { ICurrentUser } from "../utils/interfaces";
export const CurrentUserContext = createContext<ICurrentUser>({name: "", email: ""});
