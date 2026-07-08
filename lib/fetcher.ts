export async function fetcher<T>(
  url:string,
  options?:RequestInit
):Promise<T>{

  const response =
    await fetch(
      url,
      {
        ...options,
        next:{
          revalidate:300
        }
      }
    );


  if(!response.ok){

    throw new Error(
      `API request failed: ${response.status}`
    );

  }


  return response.json();
}
