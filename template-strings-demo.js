function generateTitle (title) {
    document.write(`
        <h2 class="darksalmon">${title}</h2>
    `)
}

function generateMemberList(memberList) {
    let listItems = ``
    for (let index = 0; index < memberList.length; index += 1) {
        let memberName = memberList[index]

        listItems += `<li>${memberName}</li>`
    }

    document.write(`
        <ul>
            ${listItems}
        </ul>
    `)
}

function generatePage () {
    let title = "Secret Runners Group"
    let memberList = [
        "Leon the Brave", 
        "Chudamani the Wise", 
        "Rio the Extravagant", 
        "Cheryl the Bard",
        "VRocks",
        "Abdelhak the Bold",
        "DMG the Slovenly",
        "Thomas the Ever-Hungry",
    ]

    generateTitle(title)
    generateMemberList(memberList)
}

generatePage()