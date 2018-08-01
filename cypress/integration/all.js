describe('Test1', function() {
    it('Create a ticket', function() {
        cy.visit('https://staging.autoserve1.com/login')
        cy.viewport(1500, 800)

        cy.get('#username').type('satishc+releasetest17@autoserve1.com').should('have.value','satishc+releasetest17@autoserve1.com')
        cy.get('#password').type('rupert22').should('have.value','rupert22')
      
       // cy.get('button').click('btn btn-login text txt-medium', {force:true})
      cy.contains('Log in').click()
       cy.wait(2000)
       cy.url().should('eq','https://staging.autoserve1.com/serviceAdvisor/dashboard')
       cy.wait(2000)
     
      cy.contains('New Vehicle').click()
      cy.url().should('eq','https://staging.autoserve1.com/neworder')
      cy.get('#firstName').type('some')

      cy.get('#lastName').type('ran')

      cy.get('#licensePlate').type('number')

      cy.get('#vin').type('2C3LA43R48H282361')

      cy.get('#v2-newOrder > div.as-neworder-header.row > div > div.col-xs-24.col-sm-16 > span > button').click()

      cy.wait(4000)

      cy.get('#ro').type('89w')

      cy.get('#tech').select('English Tech')

      cy.get('#as-neworder-create').click()

      cy.url().should('eq','https://staging.autoserve1.com/serviceAdvisor/dashboard')

              
      
        
    })
})






*******************************




describe('Test 2 Perform inspection', function () {
    it('AS a Tech open ticket and finish inspection', function () {
        cy.visit('https://staging.autoserve1.com/login')
        cy.viewport(1500, 800)

        cy.get('#username').type('satishc+releasetest17@autoserve1.com').should('have.value', 'satishc+releasetest17@autoserve1.com')
        cy.get('#password').type('rupert22').should('have.value', 'rupert22')
        // Login to store 
        cy.contains('Log in').click()


        // switch to tech 
        cy.get('#dropdownMenu').click()

        cy.get('.regular-responsive-header > .navbar > .dropdown-menu > .pendo-header-navbar-switch-user-button > a').click()

        cy.get('body > div.responsive-background.default.dark.route-workersList > div > div.responsive-body.container-fluid > div.worker-page > a:nth-child(3)').click()

        cy.get('#my-vehicles > .pendo-technician-dashboard-vehicleInShop-button > :nth-child(4)').click()


        cy.get('.list-group > :nth-child(3)').click()


        for (var j = 2; j <= 8; j++) {

            maintenance(j);

        }
        function maintenance(j) {

            cy.get(":nth-child(" + j + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .warning").click()

        }

        cy.get('#app > div > div > div.inspectionOrderlayout.row > div.inspection-header > nav > div.scroll-area > ul > li:nth-child(4) > div > div.hidden-xs.hidden-sm.large-text-tab').should('be.visible')
        cy.get('.list-group > :nth-child(4)').click()


        for (var i = 2; i <= 7; i++) {

            drive(i);

        }
        function drive(i) {

            cy.get(":nth-child(" + i + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .critical").click()

        }

        for (var n1 = 2; n1 < 7; n1++) {
            notedrive(n1);
        }
        function notedrive(n1) {
            cy.get(":nth-child(" + n1 + ") > .inspection-item > :nth-child(2) > .row > .inspection-item-map-photo-note > .pull-right > .inspection-item-notes > .icon").click()
            cy.get('#edit-note-textarea').type("first note " + n1 + "")
            cy.wait(2000)
            cy.get('.pull-right > .btn-primary').click()
        }

        //lighting tab

        cy.get('.list-group > :nth-child(5)').click()

        for (var k = 2; k <= 6; k++) {
            lighttab(k);
        }
        function lighttab(k) {
            cy.get(":nth-child(1) > :nth-child(" + k + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .okay").click()


        }

        for (var k1 = 2; k1 <= 6; k1++) {
            lighttab1(k1);
        }

        function lighttab1(k1) {
            cy.get(":nth-child(2) > :nth-child(" + k1 + ") > .inspection-item > div.col-xs-12 > .row > .inspection-item-severity > .okay").click()

        }
        cy.wait(2000)

        //cy.get('.finish-inspection').click()
        //cy.wait(3000)

                       



        // cy.get(':nth-child(8) > .inspection-item > :nth-child(2) > .row > .inspection-item-map-photo-note > .pull-right > .media-button > .as1-button > .icon').click()

        // cy.fixture('2.jpg')
        // cy.get(':nth-child(2) > #ticket-status > [href="#"] > .pendo-dashboard-v1-ticket-inspection-button > .img-container').click()


    })
})

********************************


describe('Test 3 Open report', function () {
    it('As a SA open report and send report', function () {

        cy.visit('https://staging.autoserve1.com/login')
        cy.viewport(1500, 800)

        cy.get('#username').type('satishc+releasetest17@autoserve1.com').should('have.value','satishc+releasetest17@autoserve1.com')
        cy.get('#password').type('rupert22').should('have.value','rupert22')
      
       // cy.get('button').click('btn btn-login text txt-medium', {force:true})
      cy.contains('Log in').click()
       cy.wait(2000)
       cy.url().should('eq','https://staging.autoserve1.com/serviceAdvisor/dashboard')

       cy.get('.pendo-dashboard-v1-ticket-report-button').click()

       cy.get('#estimate-complete-container > label > span').click()

       cy.wait(3000)

       cy.get('#navbar > .nav > :nth-child(5) > a').click()

       cy.get('#showEmailDialog').click()


       cy.get('#toEmailAddress').type('satishc+releasetest17@autoserve1.com').should('have.value','satishc+releasetest17@autoserve1.com')
       
       cy.wait(2000)
       cy.get('#sendEmail').click()



       
      // cy.get(':nth-child(1) > .accordion-header > .pendo-summary-critical-items-accordion-header > .item-name').contains('value','ALIGNMENT')

    })
})


