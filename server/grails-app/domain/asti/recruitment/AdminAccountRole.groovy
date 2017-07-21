package asti.recruitment

import grails.gorm.DetachedCriteria
import groovy.transform.ToString

import org.apache.commons.lang.builder.HashCodeBuilder

@ToString(cache=true, includeNames=true, includePackage=false)
class AdminAccountRole implements Serializable {

	private static final long serialVersionUID = 1

	AdminAccount adminAccount
	Role role

	@Override
	boolean equals(other) {
		if (other instanceof AdminAccountRole) {
			other.adminAccountId == adminAccount?.id && other.roleId == role?.id
		}
	}

	@Override
	int hashCode() {
		def builder = new HashCodeBuilder()
		if (adminAccount) builder.append(adminAccount.id)
		if (role) builder.append(role.id)
		builder.toHashCode()
	}

	static AdminAccountRole get(long adminAccountId, long roleId) {
		criteriaFor(adminAccountId, roleId).get()
	}

	static boolean exists(long adminAccountId, long roleId) {
		criteriaFor(adminAccountId, roleId).count()
	}

	private static DetachedCriteria criteriaFor(long adminAccountId, long roleId) {
		AdminAccountRole.where {
			adminAccount == AdminAccount.load(adminAccountId) &&
			role == Role.load(roleId)
		}
	}

	static AdminAccountRole create(AdminAccount adminAccount, Role role) {
		def instance = new AdminAccountRole(adminAccount: adminAccount, role: role)
		instance.save()
		instance
	}

	static boolean remove(AdminAccount u, Role r) {
		if (u != null && r != null) {
			AdminAccountRole.where { adminAccount == u && role == r }.deleteAll()
		}
	}

	static int removeAll(AdminAccount u) {
		u == null ? 0 : AdminAccountRole.where { adminAccount == u }.deleteAll()
	}

	static int removeAll(Role r) {
		r == null ? 0 : AdminAccountRole.where { role == r }.deleteAll()
	}

	static constraints = {
		role validator: { Role r, AdminAccountRole ur ->
			if (ur.adminAccount?.id) {
				AdminAccountRole.withNewSession {
					if (AdminAccountRole.exists(ur.adminAccount.id, r.id)) {
						return ['userRole.exists']
					}
				}
			}
		}
	}

	static mapping = {
		id composite: ['adminAccount', 'role']
		version false
	}
}
