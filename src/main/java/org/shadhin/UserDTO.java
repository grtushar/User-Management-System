package org.shadhin;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by prime on 8/9/16.
 */

public class UserDTO implements Serializable {
    private String fullName;
    private Date dob;
    private String sex;
    private String about;
    private String userId;
    private String password;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "userDTO{" +
                "fullName='" + fullName + '\'' +
                ", dob=" + dob +
                ", sex='" + sex + '\'' +
                ", about='" + about + '\'' +
                ", userId='" + userId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
