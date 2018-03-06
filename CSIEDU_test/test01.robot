*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${WEB URL}    http://localhost:5000
${BROWSER}    Chrome
${username}    admin
${password}    test

*** Test Cases ***
Valid Login
    Open Browser To Login Page
    Input Username    demo
    Input Password    mode
    Submit Credentials
    Welcome Page Should Be Open
    Go To Table Page
    [Teardown]    Close Browser

*** Keywords ***
Open Browser To Login Page
    Set Selenium speed    1.5 seconds
    Open Browser    ${WEB URL}    ${BROWSER}
    Title Should Be    CSI

Input Username
    [Arguments]    ${username}
    Input Text    username    ${username}

Input Password
    [Arguments]    ${password}
    Input Text    password    ${password}

Submit Credentials
    Click Button    loginBtn

Welcome Page Should Be Open
    Wait Until Element Is Visible    tablePage

Go To Table Page
    Click Element    tablePage