
let requestToken: string;
let sessionId: number;
let listId = '7101979';

/**Variaveis que seram inseridas pelo usuario */
let username = document.getElementById('username-login')! as HTMLInputElement;
let password = document.getElementById('password-login')! as HTMLInputElement;
let api_key = document.getElementById('apikey-login')! as HTMLInputElement;
/**Variaveis que são fornecidas pelo html para da acesso ao campos */
let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;
let search = document.getElementById('search')! as HTMLInputElement;

loginButton?.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton?.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = search.value;
  let listaDeFilmes: any = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"
  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${item.id} - ${item.original_title} `))
    ul.appendChild(li)
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})


function preencherSenha() {
  return password.value;
}

function preencherLogin() {
  return username.value;
}

function preencherApi() {
  return api_key.value;
}

function validateLoginButton() {
  if (preencherSenha() && preencherLogin() && preencherApi()) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get<T>({url, method, body= null}: ReturnMethod){
    return new Promise<T>((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

/**Configurações de Login */

async function criarRequestToken () {
  let result = await HttpClient.get<ReturnToken>({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${api_key.value}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
  let result = await HttpClient.get<UserAuthenticateLogin>({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${api_key.value}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result: any = await HttpClient.get<ReturnSession>({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${api_key.value}&request_token=${requestToken}`,
    method: "GET"
  })
  sessionId = result.session_id;
}

/**Configuração para criar lista de filmes */

async function procurarFilme(query: string): Promise<IMovies> {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get<IMovies>({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${api_key.value}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId: number) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${api_key.value}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}


async function criarLista(nomeDaLista: string, descricao: string) {
  let result = await HttpClient.get<CreateListMovies>({
    url: `https://api.themoviedb.org/3/list?api_key=${api_key.value}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      languageDefault: "pt-br"
    }
  })
  listId = result.listId
}

async function adicionarFilmeNaLista(filmeId: number, listaId: string) {
  let result = await HttpClient.get<AddMovieToList>({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${api_key.value}&session_id=${sessionId}`,
    method: "POST",
    body: {
      mediaId: filmeId 
    }
  })
  console.log(result);
}

async function pegarLista() {
  let result = await HttpClient.get<GetListMovies>({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${api_key.value}`,
    method: "GET"
  })
  console.log(result);
}
