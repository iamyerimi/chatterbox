import { GoogleLoginButton } from './google-login-button'

export const ServiceLayout = () => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <img src="/images/main_logo.png" alt="메인 로고" />
        <div className="flex justify-center">
          <h1 className="text-center">chatterbox.</h1>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <GoogleLoginButton />
      </div>
    </>
  )
}
