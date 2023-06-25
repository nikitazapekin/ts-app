import { GithubUser } from "../components/types";

export const isGuardUser =(user: any): user is GithubUser => "id" in user