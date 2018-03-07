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
    Input Username    ${username}
    Input Password    ${password}
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
    Wait Until Element Is Visible    id:username
    Input Text    id:username    ${username}

Input Password
    [Arguments]    ${password}
    Wait Until Element Is Visible    xpath://*[@id="password"]
    Input Text    xpath://*[@id="password"]    ${password}

Submit Credentials
    Click Button    id:loginBtn

Welcome Page Should Be Open
    Wait Until Element Is Visible    id:tablePage

Go To Table Page
    Click Element    id:tablePage