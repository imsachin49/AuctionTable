#include <bits/stdc++.h>
using namespace std;
#define int long long
const int mod=1e9+7;
#define ll long long
const ll inf = 1LL<<62;


static bool cmp(vector<int>&a,vector<int>&b){
    if(a[0]==b[0]) return a[1]<b[1];
    return a[0]<b[0];
}

signed main() {
    vector<vector<int>>g={{3,6},{5,5},{6,3}};
    // sorting accordding to 0 but where 0 equal according to 1
    sort(g.begin(),g.end(),cmp);

    int cnt=0, maxi=INT_MIN;
    for(int i=g.size()-1;i>=0;i--){
        if(g[i][1]<maxi) cnt++;
        else maxi=g[i][1];
    }
    cout<<cnt<<endl;

    return 0;
}