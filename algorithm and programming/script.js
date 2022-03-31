var u0 = 0,
    u1 = 1,
    u2 = 2,
    Un
    n = 5;

for (var i = 3; i <= n; i++){
    Un = 2 * u2 + 3 * u0; 
    console.log(`U${i}= 3U${i - 1} + 3U${i - 3} = ${Un}`);
    u0 = u1;
    u1 = u2;
    u2 = Un;
}

if (n > 2)
    console.log(`U${n}= ${Un}`);
else
    console.log('can\'t calculate Un with n<=2');