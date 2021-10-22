const LinksSocialMedia = {
  github: 'LuanGomes12',
  youtube: 'Renato Garcia',
  facebook: 'luan.lima.18488',
  instagram: 'luan.g0mes',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  // Utilizando classes ou tags para referenciar elementos do DOM utiliza-se assim: document.getElementById('userName').textContent = 'Luan'

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1 --> i++
// i = i - 1 --> i--

// Ser humano: 12345678910
// Computador: 0123456789 --> não interessa a quantidade, mas sim a posição

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
