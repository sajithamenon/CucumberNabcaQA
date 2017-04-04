package Steps;

import Base.BaseUtil;
import Pages.loginPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.List;
import java.util.Map;

/**
 * Created by Sajitha on 3/30/2017.
 */
public class LoginTest extends BaseUtil {
    private BaseUtil base;


    public LoginTest(BaseUtil base) {
        this.base = base;
    }

    @Given("^When I am on login page$")
    public void when_I_am_on_login_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
System.out.println("the driver is  navigating);");
        base.driver.navigate().to("http://52.24.76.254/#!/loginPage");
    }
    @And("^I enter the following details$")
    public void iEnterTheFollowingDetails(DataTable table) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        List<Map<String, String>> data = table.asMaps(String.class, String.class);
        System.out.println(data.get(0).get("pasword"));
         loginPage LoginPage=new loginPage(base.driver);
        LoginPage.login(data.get(0).get("userName"),data.get(0).get("pasword"));

               // base.driver.findElement(By.id("username")).sendKeys(data.get(0).get("userName"));
               // base.driver.findElement(By.id("password")).sendKeys(data.get(0).get("pasword"));


    }

    @And("^I click on login button$")
    public void i_click_on_login_button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
//base.driver.findElement(By.className("btn")).submit();

      loginPage Loginpage=new loginPage(base.driver);
        Loginpage.submit();
    }

    @Then("^i should see the  page title as \"(.*?)\"$")
    public void i_should_see_the_page_title_as_Dashboard(String expected) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals(expected, base.driver.getTitle());
    }

    @And("^the tab users on the page$")
    public void the_tab_users_on_the_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Thread.sleep(3000);
        base.driver.findElement(By.linkText("Users")).isDisplayed();
        System.out.print(base.driver.findElement(By.linkText("Users")).isDisplayed());

    }




}
