describe('The Apple packets app', function(){

    it('should calculate how much one apple costs to buy', function(){
        const ApplePrice = ApplePackets();
        

    })

    it('should calculate how all the apples in a packet would cost to buy', function(){
        const ApplePrice = ApplePackets();
        ApplePrice.setPacketsCost(35.00);
        assert.equal(35.00,ApplePrice.costPricePerPackets());

    })

    it('should be calculate the number of packets that can be made from the number of apples in the box', function(){
        const ApplePrice = ApplePackets();

    })

    it('should be able to determine which packet of apples should be sold to make the required profit percentage', function(){
        const ApplePrice = ApplePackets();

    })
})