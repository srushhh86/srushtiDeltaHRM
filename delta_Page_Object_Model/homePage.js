  /**
       * @param {import('playwright').Page} page
       */

class HomePage
{
    constructor(page)
    {
        this.page=page
        this.searchTxtFld=page.getByPlaceholder("Search")
        this.adminLink=page.getByRole("link",{name:"Admin"})
        this.PIMLink=page.getByRole("link",{name:"PIM"})
        this.leaveLink=page.getByRole("link",{name:"Leave"})
        this.timeLink=page.getByRole("link",{name:"Time"})
        this.recruitmentLink=page.getByRole("link",{name:"Recruitment"})
        this.myInfoLink=page.getByRole("link",{name:"My Info"})
        this.performanceLink=page.getByRole("link",{name:"Performance"})
        this.directoryLink=page.getByRole("link",{name:"Directory"})
        this.maintenanceLink=page.getByRole("link",{name:"Maintenance"})
        this.claimLink=page.getByRole("link",{name:"Claim"})
        this.buzzLink=page.getByRole("link",{name:"Buzz"})
        this.leaveLink=page.getByRole("link",{name:"Leave"})
        this.profilePic=page.locator("//span[@class='oxd-userdropdown-tab']//img[@alt='profile picture']")
        this.changePasswordLink=page.locator("//a[.='Change Password']")
    }
}
export default HomePage