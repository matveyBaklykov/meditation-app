export interface LoginResponse {
  data: {
    token: string
    user: {
      email: string
      id: number
      username: string
    }
  }
  message: string
  status: string
}

export interface RegisterResponse {
  data: {
    email: string
    id: number
    username: string
  }
  message: string
  status: string
}
