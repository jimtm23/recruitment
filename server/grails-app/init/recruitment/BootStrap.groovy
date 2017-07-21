package recruitment
import asti.recruitment.*
import grails.plugin.springsecurity.SpringSecurityUtils
import grails.plugin.springsecurity.SecurityFilterPosition

class BootStrap {

    def init = { servletContext ->

    	SpringSecurityUtils.clientRegisterFilter('restLogoutFilter', SecurityFilterPosition.LOGOUT_FILTER.order - 1)

    	def role1 = new Role(authority:"ROLE_ADMIN", description: "Admin permission").save flush:true
    	def role2 = new Role(authority:"ROLE_APPLICANT", description: "Applicant permission").save flush:true
    	
		def user1 = new AdminAccount(username:"admin",password:"admin").save flush:true
		AdminAccountRole.create(user1,role1)
    }
    def destroy = {
    }
}
