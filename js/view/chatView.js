function render() {
    // Container principal
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Limpa qualquer conteúdo anterior
    
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.style = `
        display: flex;
        height: 100vh;
        width: 100%;
        font-family: Arial, sans-serif;
        color: #333;
    `;
    
    
    // Barra lateral de chats
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    sidebar.style = `
        width: 25%;
        background-color: #F7F8FC;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    `;
    
    // Cabeçalho da barra lateral
    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'sidebar-header';
    sidebarHeader.style = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    `;
    const sidebarTitle = document.createElement('h2');
    sidebarTitle.innerText = 'Chats';
    sidebarTitle.style = 'margin: 0;';
    const addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.style = `
        background-color: #04247B;
        border: none;
        color: white;
        border-radius: 50%;
        cursor: pointer;
    `;
    
    sidebarHeader.appendChild(sidebarTitle);
    
    sidebarHeader.appendChild(addButton);
    sidebar.appendChild(sidebarHeader);
    
    // Lista de chats
    const chatList = document.createElement('div');
    chatList.className = 'chat-list';
    chatList.style = `
        flex: 1;
        overflow-y: auto;
    `;
    // Adicionando exemplos de chats
    const chatItems = ['Armando', 'Ayra', 'Manu', 'Nando', 'Paty'];
    chatItems.forEach(chat => {
        const chatItem = document.createElement('div');
        chatItem.className = 'chat-item';
        chatItem.style = `
            display: flex;
            align-items: center;
            padding: 15px;
            margin-bottom: 10px;
            background-color: white;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        `;
        const chatImg = document.createElement('div');
        chatImg.style = `
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #E0E0E0;
            margin-right: 15px;
        `;
        
        const chatText = document.createElement('div');
        chatText.innerText = chat;
        chatItem.appendChild(chatImg);
        chatItem.appendChild(chatText);
        chatList.appendChild(chatItem);
    });
    sidebar.appendChild(chatList);
    chatContainer.appendChild(sidebar);
    
    // Área principal do chat
    const mainChatArea = document.createElement('div');
    mainChatArea.className = 'main-chat-area';
    mainChatArea.style = `
        flex: 2;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 20px;
    `;
    
    // Header do chat principal
    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';
    chatHeader.style = `
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    `;
    const userAvatar = document.createElement('div');
    userAvatar.style = `
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #E0E0E0;
        margin-right: 15px;
    `;
    
    const userName = document.createElement('div');
    userName.innerText = 'Simone Biles';
    const lastSeen = document.createElement('div');
    lastSeen.innerText = 'Last seen 3 hours ago';
    lastSeen.style = `
        font-size: 0.8rem;
        color: gray;
    `;
    const userInfo = document.createElement('div');
    userInfo.appendChild(userName);
    userInfo.appendChild(lastSeen);
    chatHeader.appendChild(userAvatar);
    chatHeader.appendChild(userInfo);
    mainChatArea.appendChild(chatHeader);
    
    // Área de mensagens
    const chatMessages = document.createElement('div');
    chatMessages.className = 'chat-messages';
    chatMessages.id = 'chatMessages';
    chatMessages.style = `
        flex: 1;
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 10px;
        background-color: #F7F8FC;
        border-radius: 10px;
    `;
    // Adicionando mensagens de exemplo
    const userMessage = document.createElement('div');
    userMessage.innerHTML = '<span style="background-color: #04247B; color: white; padding: 10px; border-radius: 20px; display: inline-block; margin-bottom: 10px;">Hey! Listen</span>';
    userMessage.style = 'text-align: right;';
    const botMessage = document.createElement('div');
    botMessage.innerHTML = '<span style="background-color: #E0E0E0; padding: 10px; border-radius: 20px; display: inline-block; margin-bottom: 10px;">I really like your idea!</span>';
    chatMessages.appendChild(userMessage);
    chatMessages.appendChild(botMessage);
    mainChatArea.appendChild(chatMessages);
    
    // Caixa de entrada de mensagem
    const chatInput = document.createElement('div');
    chatInput.className = 'chat-input';
    chatInput.style = `
        display: flex;
        align-items: center;
        background-color: #F7F8FC;
        padding: 10px;
        border-radius: 30px;
    `;
    
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Type a message here...';
    messageInput.style = `
        flex: 1;
        border: none;
        background-color: transparent;
        padding: 10px;
        outline: none;
    `;
    
    const sendButton = document.createElement('button');
    sendButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2z"/></svg>';
    sendButton.style = `
        background-color: #04247B;
        border: none;
        color: white;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
    `;
    
    chatInput.appendChild(messageInput);
    chatInput.appendChild(sendButton);
    mainChatArea.appendChild(chatInput);
    
    chatContainer.appendChild(mainChatArea);
    
    // Barra lateral de notificações e sugestões
    const notificationArea = document.createElement('div');
    notificationArea.className = 'notification-area';
    notificationArea.style = `
        width: 25%;
        background-color: #F7F8FC;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    `;
    
    const notificationHeader = document.createElement('div');
    notificationHeader.innerText = 'Notifications';
    notificationHeader.style = `
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    `;
    notificationArea.appendChild(notificationHeader);
    
    const notifications = ['@Phelps mentioned you in "Trip to London"', '@Serena added you in group "Run Run"', '@Amanda removed you from group "Lets Win!"'];
    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.style = `
            padding: 10px;
            background-color: white;
            margin-bottom: 10px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        `;
        notificationItem.innerText = notification;
        notificationArea.appendChild(notificationItem);
    });
    
    const suggestionHeader = document.createElement('div');
    suggestionHeader.innerText = 'Suggestions';
    suggestionHeader.style = `
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    `;
    notificationArea.appendChild(suggestionHeader);
    
    const suggestions = ['Rebecca', 'Michael', 'Alcaraz', 'Vitória'];
    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.style = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: white;
            margin-bottom: 10px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        `;
        const suggestionText = document.createElement('div');
        suggestionText.innerText = suggestion;
        const addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.style = `
            background-color: #04247B;
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        `;
        suggestionItem.appendChild(suggestionText);
        suggestionItem.appendChild(addButton);
        notificationArea.appendChild(suggestionItem);
    });
    
    chatContainer.appendChild(notificationArea);
    container.appendChild(chatContainer);
    
}

export default { render };
