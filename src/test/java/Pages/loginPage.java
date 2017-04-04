package Pages;

import Base.BaseUtil;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Sajitha on 3/31/2017.
 */
public class loginPage {
    public loginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "username")
    public WebElement Usernames;
    @FindBy(how = How.ID, using = "password")
    public WebElement Password;
    @FindBy(how = How.CLASS_NAME, using = "btn")
    public WebElement submit;
    @FindBy(how = How.LINK_TEXT, using = "Forgot your password?")
    public WebElement ForgotPassword;
    @FindBy(how = How.LINK_TEXT, using = "Request an account")
    public WebElement requestAnaccnt;
    @FindBy(how = How.ID, using = "logo")
    public WebElement Logo;


    public void login(String Username, String password) {
        Usernames.sendKeys(Username);
        Password.sendKeys(password);

    }

    public void submit() {
        submit.submit();
    }
}


