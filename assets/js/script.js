//DISCORD SERVER SETTINGS
//TAGS: plutonium xlabs h1 sm2 boiii
const servers = [
{ 

    Name: 'Plutonium', 
    Profile: './assets/images/plutonium/profile.gif', 
    Description: 'All of the games we support include a dedicated server browser. No matter your favorite play style, mode or clan - theres probably a server for it!', 
    Members: '130,000 Members',
    Tags: 'T6 IW5 T4 T5',
    Promote: 'True',
    Link: "https://discord.gg/plutonium",
  
},

{ 

  Name: 'X labs', 
  Profile: './assets/images/xlabs/profile.png', 
  Description: 'X Labs clients restore missing features removed by the developers and further the capabilities of the games.', 
  Members: '75,000 Members',
  Tags: 'T6 IW5 T4 T5',
  Promote: 'false',
  Link: "https://discord.gg/plutonium",
  Verified: `<i class="fa fa-badge-check"></i>`

},


]

// CREATES THE DISCORD SERVERS ON HTML

const addDiscord = (arr) => {
  const serverList = document.querySelector('#root');
  let output = '';
  arr.forEach(server => {
    output += `
<a target="_self" rel="noreferrer" title="" href="${server.Link}">
    <div class="relative overflow-hidden bot-card w-full h-full bg-admin p-6 rounded-xl cursor-pointer" ispromotion="${server.Promote}">
        <div class="relative z-[2]">
            <div class="flex items-center mb-4 gap-4">
                <div>
                    <div class="relative w-16 h-16 rounded-lg overflow-hidden bg-input">
                      <img src="${server.Profile}" alt="bonkt" width="1024" height="512" decoding="async" data-nimg="1" class="w-full h-full object-cover" loading="lazy" style="color:transparent"/>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex items-center gap-2">
                        <div class="flex items-center justify-center w-8 h-8 bg-input text-blue-600 rounded-full text-xl bg-transparent text-white w-5 h-5">
                            <i class="fa fa-badge-check"></i>
                        </div>
                        <h3 class="min-w-min text-white font-semibold text-lg line-clamp-1">${server.Name}</h3>
                    </div>
                    <h4 class="text-gray-400 text-sm"></h4>
                </div>
            </div>
            <p class="text-gray-400 text-sm mt-1 line-clamp-4 h-20">${server.Description}</p>
            <div class="flex items-center justify-between gap-2 mt-4 h-8">
                <p class="text-sm bg-blue-600/10 w-min whitespace-nowrap px-2 py-0.5 rounded-md text-blue-600"># Verified</p>
                <div class="flex-shrink-0 text-sm py-1.5 rounded-lg gap-2 flex items-center text-white">
                    <i class="fab fa-discord"></i>
                    ${server.Members}
                </div>
            </div>
        </div>
    </div>
</a>
    `
    serverList.innerHTML = output;
  })
}

addDiscord(servers)

//Filter buttons

const filterButtons = document.querySelector('#filter-buttons').querySelectorAll('button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');
    const serverContainers = document.querySelectorAll('.server-container');
    
    serverContainers.forEach(container => {
      container.style.display = 'none';
      if (container.classList.contains(filterValue) || filterValue === '*') {
        container.style.display = 'block';
      }
    });
  });
});