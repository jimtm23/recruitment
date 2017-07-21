package asti.recruitment

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional
import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class ApplicantController extends RestfulController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: ["PUT","POST"], delete: "DELETE"]

    ApplicantController() {
        super(Applicant)
    }

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Applicant.list(params), model:[applicantCount: Applicant.count()]
    }

    def show(Applicant applicant) {
        respond applicant
    }

    @Transactional
    def save(Applicant applicant) {
        if (applicant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (applicant.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond applicant.errors, view:'create'
            return
        }

        applicant.save flush:true

        respond applicant, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Applicant applicant) {
        if (applicant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        if (applicant.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond applicant.errors, view:'edit'
            return
        }

        applicant.save flush:true

        respond applicant, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Applicant applicant) {

        if (applicant == null) {
            transactionStatus.setRollbackOnly()
            render status: NOT_FOUND
            return
        }

        applicant.delete flush:true

        render status: NO_CONTENT
    }
}
