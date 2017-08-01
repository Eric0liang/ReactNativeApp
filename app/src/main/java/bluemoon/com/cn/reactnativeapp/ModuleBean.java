package bluemoon.com.cn.reactnativeapp;

/**
 * Created by liangjiangli on 2017/8/1.
 */

public class ModuleBean {
    private String displayName;
    private String moduleName;

    public ModuleBean(String displayName, String moduleName) {
        this.displayName = displayName;
        this.moduleName = moduleName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getModuleName() {
        return moduleName;
    }

    public void setModuleName(String moduleName) {
        this.moduleName = moduleName;
    }
}
