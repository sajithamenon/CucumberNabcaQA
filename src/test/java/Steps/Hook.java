package Steps;

import Base.BaseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by Sajitha on 3/30/2017.
 */
public class Hook extends BaseUtil{
    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void initialiseTest(){
        System.out.print("initialiseTest by opening the by opening the browser");
        //passing a dummy webDriver instance
base.driver= new FirefoxDriver();

            }
    @After

    public void tearDown() {
       /* if (scenario.isFailed()) {
            final byte[] screenshotBytes=((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshotBytes,"image/png");*/


       base.driver.close();
        base.driver.quit();
    }}





