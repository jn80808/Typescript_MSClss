
async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data
};


//the questions is how  would you strictly type this kind of function 
// Since this is an asynchronous function this would always return a promise
// We are using the fetch API and fetch API returns a promise.
// And what would that promise resolve into?
// It could be anything.
// So if you are fetching posts it could be a type of a post.
// If you're fetching user, it could be a type of a user.
// If you're fetching array of users, it could be an array of users.
// So how would you strictly type this?


// It should still be able to fetch any data for you, even if you haven't defined what kind of data you're
// fetching from the API endpoint.
// So here I'm going to use a generic let's say fetch data has a generic variable of <T>.

// And since we want fetch data to work with every kind of response, even if it's declared or not, we
// can always say that <T> has a default value or type of any <T = any>.

async function fetchData1<T = any>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//So in order to use this Fetchdata function, I'm going to declare a new function here called fetchDefault and I'm going to call the fetchData1 function inside it and I'm going to pass in the URL of the API endpoint that I want to fetch data from.
async function fetchDefault(){
    const data = await fetchData1("https://jsonplaceholder.typicode.com/posts/1"); // data is of type any because we haven't specified what kind of data we're fetching from the API endpoint.
    console.log(data);
}

fetchDefault();

//Output: 
// { userId: 1, 
// id: 1, 
// title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
// body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' 
//}

// So even if we haven't specified what kind of data we're fetching from the API endpoint, we can still fetch the data and it will be of type any because we have set a default value for the generic variable <T> as any.


// So TypeScript right now is not aware of what kind of data it is, it just knows that it is of any type.
// But now we know that this API endpoint returns us data which has all these four properties on it.
// So we can always declare a type for these four properties and use that type to typecast using the generic.


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchDefault1(){
    const data = await fetchData1<Post>("https://jsonplaceholder.typicode.com/posts/1"); // data is of type Post because we have specified that the generic variable <T> is of type Post.
    console.log(data);
}

fetchDefault1();

//Output:
// { userId: 1,
// id: 1,
// title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
// body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
// }












