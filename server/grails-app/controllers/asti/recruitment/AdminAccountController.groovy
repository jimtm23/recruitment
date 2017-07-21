package asti.recruitment

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import grails.rest.*
import grails.converters.*

@Transactional(readOnly = true)
class AdminAccountController extends RestfulController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    AdminAccountController() {
        super(AdminAccount)
    }
    
    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond AdminAccount.list(params), model:[adminAccountCount: AdminAccount.count()]
    }

    def show(AdminAccount adminAccount) {
        respond adminAccount
    }

    @Transactional
    def save(AdminAccount adminAccount) {
        if (adminAccount == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (adminAccount.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond adminAccount.errors, view:'create'
            return
        }

        adminAccount.save flush:true

        respond adminAccount, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(AdminAccount adminAccount) {
        if (adminAccount == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (adminAccount.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond adminAccount.errors, view:'edit'
            return
        }

        adminAccount.save flush:true

        respond adminAccount, [status: OK, view:"show"]
    }

    @Transactional
    def delete(AdminAccount adminAccount) {

        if (adminAccount == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        adminAccount.delete flush:true

        render status: NO_CONTENT
    }
}
