export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center  h-screen">
        <div className="h-full w-full">
          <div className="relative h-screen">
            <div className="blurred-bg absolute inset-0 md:bg-[url('/images/sign-up.png')] bg-cover bg-center bg-no-repeat h-screen w-screen">
              <div className="flex h-full w-full items-center justify-center md:px-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
