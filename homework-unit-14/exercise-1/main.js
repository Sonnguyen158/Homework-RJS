const menuItems = [
  {
    title: 'Dashboard',
    icon: '<i class="fas fa-tachometer-alt fa-2x"></i>',
    items: ['Tool', 'Report', 'Analytics', 'Code Blocks']
  },

  {
    title: 'Sales',
    icon: '<i class="fas fa-truck fa-2x"></i>',
    items: ['New Sales', 'Expried Sales', 'Sales Report', 'Deliveries']
  },

  {
    title: 'Messages',
    icon: '<i class="fas fa-envelope fa-2x"></i>',
    items: ['Inbox', 'Out box', 'Sent', 'Archived']
  },

  {
    title: 'Users',
    icon: '<i class="fas fa-user-friends fa-2x"></i>',
    items: ['New Users', 'Users Group', 'Permission', 'Password']
  },

  {
    title: 'Settings',
    icon: '<i class="fas fa-cogs fa-2x"></i>',
    items: ['Database', 'Design', 'Change Users', 'Log out']
  }
]

const subMenuList = item => {
  const newItem = item.items

  return newItem.map(child => `<li> <a href=""> ${child} </a> </li>`).join('')
}

const menuList = document.getElementById('menu-list')

const contentMenuList = menuItems.map(item => `<li> <a href="" onclick="showActive()"> ${item.icon} <p> ${item.title} </p> <i class="fas fa-angle-right fa-2x"></i> </a> <ul class="submenu"> ${subMenuList(item)} </ul> </li>`)

menuList.innerHTML = contentMenuList.join('')

const showActive = () => {
  const subMenu = document.getElementsByClassName('submenu')
  subMenu.style.display = 'block'
}

