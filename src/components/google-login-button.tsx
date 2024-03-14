export const GoogleLoginButton = () => {
  return (
    <>
      <div className="flex justify-center">
        <button className="inline-flex items-center justify-center w-full max-w-md h-12 px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
          <img
            src="/images/google.svg"
            alt="Google 로고"
            className="w-6 h-6 mr-3 bg-white rounded-full p-1"
          />
          Google 계정으로 시작하기
        </button>
      </div>
    </>
  )
}
