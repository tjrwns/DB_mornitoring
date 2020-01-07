**WebPage/root**
===================

* Web Application
* 개발 환경
	* HTML5, JS, LESS, CSS
	* Template HTML
		* \<include-html></include-html>
		* \<import-html></import-html>

-------------
파일 설명
-------------

#### _NPM INSTALL.***
 * node_modules 설치 파일
 * npm install -g less

#### :file_folder: node_modules.zip
 * 압축 해제.
 * Custom Node Binary
	* node_modules/exes/exes100.exe, node_modules/exes/exes100을 node.exe 대신 사용한다.

-------------
폴더 설명
-------------

#### :open_file_folder: ./_description
 * Project 폴더별 설명 파일


#### :open_file_folder: ./bin_mac
 * Mac용 Build Script가 존재한다.


#### :open_file_folder: ./bin_win
 * Windows용 Build Script가 존재한다.


#### :open_file_folder: ./css
 * 공통 css를 정의한다.


#### :open_file_folder: ./css_ui
 * 코딩 규칙 문서폴더


#### :open_file_folder: ./less
 * 공통 css를 정의한다.
 * *.less 파일을 사용한다.


#### :open_file_folder: ./less_ui
 * *.less 파일을 사용한다.
 * node_modules의 less 모듈을 활용해서 *.css로 변환한다.


#### :open_file_folder: js
 * index.js가 존재하는 폴더

 * *.js 모여있는 폴더
	* ./js/b2link
	* ./js/b2link_service_***
	* ./js/b2link_ui_***
	* ./js/b2link_url_***


#### :open_file_folder: libs
 * Libraries 폴더


#### :open_file_folder: node_modules
 * node_modules/exes/exes100 : NodeJS Binary
 * less Node Module이 설치 되어있다.


#### :open_file_folder: ui
 * Database Schema 별 구성 폴더가 존재한다.
 * *.html은 Batch파일을 통해 자동 생성된다.
	* __전체-빌드-개발.bat
	* __전체-빌드-개발-LESS-제외.bat
	* ui_template__ui--createHTML__FromTemplateHTML.bat

 * *.html은 Batch파일을 통해 자동 제거된다.
	* __Commit 하기 전 실행.bat


#### :open_file_folder: ui_import
 * 공통 폴더들이 존재한다.
 * Database Schema 별 구성 폴더가 존재한다.


#### :open_file_folder: ui_include
 * *.html을 사용한다.
 * 공통 폴더들이 존재한다.
 * Database Schema 별 구성 폴더가 존재한다.


#### :open_file_folder: ui_template
 * *.thtml을 사용한다.
 * *.html은 Batch파일을 통해 자동 생성된다.
	* __전체-빌드-개발.bat
	* __전체-빌드-개발-LESS-제외.bat
	* ui_template__ui--createHTML__FromTemplateHTML.bat

 * *.html은 Batch파일을 통해 자동 제거된다.
	* __Commit 하기 전 실행.bat

> **Note:**
> - 3.2.10_x64
> - 3.2.11_x64