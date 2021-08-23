//ocultar e mortrar campo password
function mostrarSenha(){
    var senha=document.getElementById("senha")
    if(senha.type=="password"){
      senha.type="text"
    }else{
      senha.type="password"
    }
  }
  //ocultar e mortrar campo password Confirmação de Senha
  function confirmarSenha(){
    var senha=document.getElementById("confirmarsenha")
    if(senha.type=="password"){
      senha.type="text"
    }else{
      senha.type="password"
    }
  }
  //mentoria https://www.youtube.com/watch?v=jze3TasX5DA&t=16s
  function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    
    let msgError = document.querySelector('#msgError')
    
    let listaUser = []

    let userValid = {
      nome:'',
      user:'',
      senha:'',
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
      if(usuario.value == item.usercad && senha.value == item.senhacad) {
        userValid = {
          nome: item.nomcad,
          user: item.usercad,
          senha: item.senhacad,
        }
      }      
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href='telaInicial.html'

      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
      localStorage.setItem('token', token)
      
      localStorage.setItem('userLogado', JSON.stringify(userValid))

    }else{
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')

      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha invalido'
      usuario.focus() 
    }
    
  }
  
  //if(localStorage.getItem('token') == null){
  //  alert ('Você precisa estar logado para acessar esta página.')
  //  window.location.href='index.html'
  //}
  let userLogado = JSON.parse(localStorage.getItem ('userLogado')) 
  let logado = document.querySelector('#logado')

  logado.innerHTML = 'Olá ' + userLogado.nome

  function sair(){
    localStorage.removeItem('token')
    window.location.href='index.html'
  }

  // validaões campos de cadastros
  let nome = document.querySelector('#nome')
  let labelNome = document.querySelector('#labelNome')
  let validnome = false

  let usuario = document.querySelector('#usuario')
  let labelUsuario = document.querySelector('#labelUsuario')
  let validusuario = false

  let senha = document.querySelector('#senha')
  let labelSenha = document.querySelector('#labelSenha')
  let validsenha = false

  let confirmarsenha = document.querySelector('#confirmarsenha')
  let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha')
  let validconfirmarsenha = false
  let msgError = document.querySelector('#msgError')
  let msgSuccess = document.querySelector('#msgSuccess')

  //Nome
  nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = 'Nome  *insira no minimo 3 caracteres'
      nome.setAttribute('style', 'border-color: red')
      validnome = false
    }else{
      labelNome.setAttribute('style', 'color: green')
      labelNome.innerHTML = 'Nome'
      nome.setAttribute('style', 'border-color: green')
      validnome = true
    } 
  }) 
  
  // usuárop
  usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = 'Usuário  *insira no minimo 5 caracteres'
      usuario.setAttribute('style', 'border-color: red')
      validusuario = false
    }else{
      labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML = 'Usuário'
      usuario.setAttribute('style', 'border-color: green')
      validusuario = true
    } 
  })
  
  //Senha 
  senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'Senha  *insira no minimo 8 caracteres'
      senha.setAttribute('style', 'border-color: red')
      validsenha = false
    }else{
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validsenha = true
    } 

  })  

  //Confirmar Senha
  confirmarsenha.addEventListener('keyup', () => {
    if(senha.value != confirmarsenha.value){
      labelConfirmarSenha.setAttribute('style', 'color: red')
      labelConfirmarSenha.innerHTML = 'Confirmar Senha  *As senhas não confere'
      confirmarsenha.setAttribute('style', 'border-color: red')
      validconfirmarsenha = false
    }else{
      labelConfirmarSenha.setAttribute('style', 'color: green')
      labelConfirmarSenha.innerHTML = 'Confirmar Senha'
      confirmarsenha.setAttribute('style', 'border-color: green')
      validconfirmarsenha = true
    }
  })  

  function cadastrar(){
    if(validnome && validusuario && validsenha && validconfirmarsenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push(
      {
        nomcad: nome.value,
        usercad: usuario.value,
        senhacad: senha.value,
      }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute ('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando Usuário...</strong>'
    msgErro.setAttribute ('style', 'display: none')
    msgErro.innerHTML = ''
    setTimeout(()=>{
      window.location.href='index.html'
    }, 3000)
  }else{
    msgErro.setAttribute ('style', 'display: block')
    msgErro.innerHTML = '<strong>Preencha todos os campos corretamente!</strong>'
    msgSuccess.setAttribute ('style', 'display: none')
    msgSuccess.innerHTML = ''

  }
}